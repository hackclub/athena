import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/lib/projects'

interface Project {
  id: string
  title: string
  description: string
  imageUrl?: string
  screenshot?: string
  hoursSpent: number
  githubUsername?: string
  projectName: string
}

export default async function ProjectsPage() {
  try {
    const projects = await getProjects()

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Athena Award Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <Link 
              key={project.id}
              href={`/projects/${project.githubUsername}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-48 bg-gray-200">
                  {(project.screenshot || 'project.imageUrl') ? (
                    <Image
                      src={project.screenshot || ""}
                      alt={`Project screenshot for ${project.githubUsername}'s project`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Hide broken images
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image Available
                    </div>
                  )}
                </div>
                <div className="p-4">
                  {project.githubUsername && (
                    <h2 className="text-xl font-semibold mb-2">Project by {project.githubUsername}</h2>
                  )}
                  <p className="text-gray-600 line-clamp-2">{project.description || 'No description available'}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {project.hoursSpent ? `${project.hoursSpent} hours` : 'Time not specified'}
                    </span>
                    <span className="text-sm text-[#D35648]">View Project →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {(!projects || projects.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found.</p>
          </div>
        )}
      </div>
    )
  } catch (error) {
    console.error('Error loading projects:', error)
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Athena Award Projects</h1>
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">Error loading projects. Please try again later.</p>
          <p className="text-gray-500 mt-2">Check the console for more details.</p>
        </div>
      </div>
    )
  }
}