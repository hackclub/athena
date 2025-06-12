'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeftLong } from 'react-icons/fa6'

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  hoursSpent: number
  projectName: string
}

interface UserProfile {
  name: string
  bio: string
  githubUrl: string
  twitterUrl?: string
  linkedinUrl?: string
  projects: Project[]
}

export default function UserProfilePage({ params }: { params: { githubUser: string } }) {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/profiles/${params.githubUser}`)
        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [params.githubUser])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading profile...</div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Profile not found</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/projects" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer mb-8">
        <FaArrowLeftLong /> Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
        <p className="text-gray-600 mb-4">{profile.bio}</p>
        <div className="flex gap-4">
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#D35648] hover:underline">
            GitHub
          </a>
          {profile.twitterUrl && (
            <a href={profile.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-[#D35648] hover:underline">
              Twitter
            </a>
          )}
          {profile.linkedinUrl && (
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#D35648] hover:underline">
              LinkedIn
            </a>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profile.projects.map((project) => (
          <Link 
            key={project.id}
            href={`/projects/${params.githubUser}/${project.projectName}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.hoursSpent} hours</span>
                  <span className="text-sm text-[#D35648]">View Project →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
