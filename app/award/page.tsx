import { FaArrowLeftLong } from "react-icons/fa6"
import { AirtableUsersManager } from "@/lib/airtable";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { baseAthenaAwardProjectImageUrl } from "@/lib/constants";

function zip(project_name: string[], code_urls: string[], playable_urls: string[], created_at: string[], approved_duration: string[], description: string[], screenshot_urls: string[]) {
    const zipped = code_urls.map((_: any, i: number) => ({
    name: project_name[i],
    code_url: code_urls[i],
    playable_url: playable_urls[i],
    created_at: created_at[i],
    approved_duration: approved_duration[i],
    description: `${description[i] ? ((description[i] && description[i].length >= 80) ? description[i].slice(0,80) + "..." : "") : ""}`,
    ...(screenshot_urls[i] && { screenshot_url: screenshot_urls[i] })
    }));
    return zipped
}

function FormattedProject({project, index}: {project: any, index: number} ){
    return (
    <div key={index} className = "border border-red/20 bg-red/20 h-full col-span-1 flex flex-col">
        <img src = {project.screenshot_url ?? baseAthenaAwardProjectImageUrl} className = "h-24 w-full object-cover"/>
        <div className = "p-2 flex flex-col h-full">
            <h2 className = "text-xl">{project.name}</h2>
            <div className = "flex flex-col md:flex-row w-full justify-between text-sm">
                <a target = "_blank" href = {project.code_url} className = "underline">Code URL</a>
                <a target = "_blank" href = {project.playable_url} className = "underline">Playable URL</a>
            </div>
            <div className = "grow flex-1 h-full">{project.description}</div>
            <small className = "flex flex-col md:flex-row justify-between">
                <span>{project.approved_duration}h</span>
                <span>{project.created_at}</span>
            </small>
        </div>
    </div>
    )
}

export async function submitForm(formData: any) {
  'use server'
  const id = formData.get('id');
  const params = new URLSearchParams({ id }).toString();

  if (id){
    redirect(`/award?${params}`);
  } else {
    redirect('/award')
  }
}

export default async function Award({
params,
  searchParams,
}: {
  params: Promise < {
    slug: string[]
  } > ;
  searchParams: Promise < {
    [key: string]: string | string[] | undefined
  } > ;
}) {
  const sp = await searchParams;
  const id = sp.id as string;
  var profile: any; 
  var zipped_normal: any;
  var zipped_unified: any;

  try {
    profile = await new AirtableUsersManager().getQualifiedUserById(id)
    var screenshots = profile["screenshot_cdn_url"]
    var project_name = profile["Project Name"]
    var playable_url = profile["Playable URL"]
    var code_url = profile["Code URL"]
    var description = profile["Description"]
    var code_url_unified = profile["Code URL Unified"]
    var playable_url_unified = profile["Playable URL Unified"]
    var created_at = profile["created_at"]
    var approved_duration = profile["approved_duration"]
    var screenshots_unified = profile["screenshot_cdn_url_unified"]
    
    if (code_url){
        zipped_normal = zip(project_name, code_url, playable_url, created_at, approved_duration, description, screenshots)
    }
    if (code_url_unified){
        zipped_unified = zip(project_name, code_url_unified, playable_url_unified, created_at, approved_duration, [], screenshots_unified)
    }
    
  } catch (error) {
        console.log(error)
        profile = null
  }
  
  
     return (
    <div className="px-6 lg:px-32 mb-16 pt-16 h-full relative">
      <Link href="/" className="absolute text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer mb-4"><FaArrowLeftLong /> Athena</Link>
    <div className = "flex flex-col items-center gap-4">
        <img className = "mt-12 md:mt-0 w-2/3 md:w-1/3" src = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6ea8e84acae378a03d5b5e788a780a853aae4d21_outlined_logo__alt_-cropped.svg"/>
        <div className = "md:w-2/3 mx-auto flex flex-col gap-4">
                <div className = "text-justify bg-red/10 border border-red/30 p-4 rounded-sm gap-2 items-center *:max-sm:text-sm">
                    <p>The <a target = "_blank" href = "https://award.athena.hackclub.com" className = "font-bold" >Athena Award</a> was a six month long program ran by Hack Club where girls and nonbinary students (ages 13-18) spent 30 (often more!) hours coding three technical projects.</p>
                    <p>Projects needed to be shipped - defined as deployed and experiencable by others - and open source. All submissions were tested, evaluated and approved by members of the Athena team.</p>
                    <p>For further questions, contact <b>athena@hackclub.com</b>.</p>
                    <br/>
                    <p className = "font-bold">Enter the code at the bottom left of a certification to verify its legitimacy.</p>
                </div>
                    <form className = "flex flex-row gap-4 flex-wrap items-center *:p-2" action={submitForm}>
                    Code:
                    <input name="id" required className = "rounded-sm grow border border-red/20" defaultValue={id ?? ""}></input>
                    <input type="submit" value="Verify" className = "grow border border-red/20 bg-red/70 text-white rounded-sm"/>
                    </form>
            { id && profile == null && 
                <div className = "bg-rose-500/30 border border-rose-400/40 rounded-sm p-2 text-rose-800 flex flex-col">
                    <h1 className = "text-2xl text-center">Certification not found!</h1>
                </div>
            }
            { profile &&
            <div className = "flex flex-col gap-4">
                <hr className = "border border-gray-300"/>
                <div className = "text-center flex flex-col gap-4">
                    <div className = "bg-green-400/30 border border-green-400/40 rounded-sm p-2 text-green-800 flex flex-col">
                        <h1 className = "text-2xl">This Athena Award certification is valid!</h1>
                    </div>
                <h2 className = "text-3xl text-left">Details</h2>
                <table className = "w-full text-left table-fixed">
                    <tbody>
                    <tr>
                        <td><b>Name:</b></td>
                        <td>{profile["First Name"]} {profile["Last Name Initial"]}.</td>
                    </tr>
                    <tr>
                        <td><b>Verified Hours:</b></td>
                        <td>{String(Math.round(Number(profile.total_time_approved_projects)* 100)/100)}</td>
                    </tr>
                    <tr>
                        <td><b>Verified Projects:</b></td>
                        <td>{profile.total_approved_projects}</td>
                    </tr>
                </tbody>
                </table> 
                </div>

            <h2 className = "text-3xl text-left">Projects</h2>
            <div className = "rounded-sm p-2 bg-yellow-400/30 border border-yellow-400/40">
                <h2 className = "text-xl">Note</h2>
                <p>Some projects may seem to lack information. This happens if:</p>
                <ul className = "list-disc list-inside">
                    <li>The project was submitted to another Hack Club program and not directly to the Athena Award.</li>
                    <li>The media uploaded was a video.</li>
                </ul>
            </div>
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                { zipped_normal && zipped_normal.map((project: any, index: number) => {
                    return (
                        <FormattedProject key={index} project = {project} index = {index}/>
                    )
                    }
                )}
                 { zipped_unified && zipped_unified.map((project: any, index: number) => {
                    return (
                        <FormattedProject key={index} project = {project} index = {index}/>
                    )
                    }
                )}
            </div>
            </div>
            }
            </div>
        </div>
    </div>
    
    )
}