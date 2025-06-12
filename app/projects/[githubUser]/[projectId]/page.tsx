'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  imageUrl: string
  hoursSpent: number
  githubUrl: string
  liveUrl?: string
  technologies: string[]
  author: {
    name: string
    githubUrl: string
    twitterUrl?: string
    linkedinUrl?: string
  }
}

export default function ProjectPage({ 
  params 
}: { 
  params: { githubUser: string; projectName: string } 
}) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.githubUser}/${params.projectName}`)
        const data = await response.json()
        setProject(data)
      } catch (error) {
        console.error('Error fetching project:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [params.githubUser, params.projectName])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading project...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Project not found</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href={`/projects/${params.githubUser}`} 
        className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer mb-8"
      >
        <FaArrowLeftLong /> Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-600">{project.hoursSpent} hours</span>
            <div className="flex gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-700">{project.fullDescription}</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D35648] hover:underline"
            >
              <FaGithub /> View on GitHub
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#D35648] hover:underline"
              >
                View Live Demo
              </a>
            )}
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">About the Developer</h2>
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-medium">{project.author.name}</h3>
                <div className="flex gap-3 mt-2">
                  <a 
                    href={project.author.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#D35648]"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.author.twitterUrl && (
                    <a 
                      href={project.author.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#D35648]"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {project.author.linkedinUrl && (
                    <a 
                      href={project.author.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#D35648]"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
