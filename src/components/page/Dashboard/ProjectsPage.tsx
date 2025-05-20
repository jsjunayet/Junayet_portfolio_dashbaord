"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string;
  projectUrl: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my work and skills",
      imageUrl: "https://placehold.co/600x400",
      technologies: "React, TailwindCSS, TypeScript",
      projectUrl: "https://example.com",
    },
    {
      id: "2",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      imageUrl: "https://placehold.co/600x400",
      technologies: "React, Node.js, MongoDB, Stripe",
      projectUrl: "https://example.com",
    },
  ]);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    imageUrl: "",
    technologies: "",
    projectUrl: "",
  });

  const [isAdding, setIsAdding] = useState(false);

  const handleAddProject = () => {
    const id = Date.now().toString();
    setProjects([...projects, { ...newProject, id }]);
    setNewProject({
      title: "",
      description: "",
      imageUrl: "",
      technologies: "",
      projectUrl: "",
    });
    setIsAdding(false);
  };

  const handleUpdateProject = () => {
    if (!editingProject) return;
    setProjects(
      projects.map((p) => (p.id === editingProject.id ? editingProject : p))
    );
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button onClick={() => setIsAdding(true)}>Add New Project</Button>
      </div>

      {isAdding && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Project</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
                placeholder="Project Title"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                placeholder="Project Description"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Image URL</label>
              <Input
                value={newProject.imageUrl}
                onChange={(e) =>
                  setNewProject({ ...newProject, imageUrl: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Technologies</label>
              <Input
                value={newProject.technologies}
                onChange={(e) =>
                  setNewProject({ ...newProject, technologies: e.target.value })
                }
                placeholder="React, Node.js, MongoDB"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Project URL</label>
              <Input
                value={newProject.projectUrl}
                onChange={(e) =>
                  setNewProject({ ...newProject, projectUrl: e.target.value })
                }
                placeholder="https://example.com"
              />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button onClick={handleAddProject}>Save Project</Button>
            <Button variant="outline" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      )}

      {editingProject && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Edit Project</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={editingProject.title}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={editingProject.description}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Image URL</label>
              <Input
                value={editingProject.imageUrl}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    imageUrl: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Technologies</label>
              <Input
                value={editingProject.technologies}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    technologies: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Project URL</label>
              <Input
                value={editingProject.projectUrl}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    projectUrl: e.target.value,
                  })
                }
              />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button onClick={handleUpdateProject}>Update Project</Button>
            <Button variant="outline" onClick={() => setEditingProject(null)}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-muted rounded-md overflow-hidden">
                <Image
                  height={500}
                  width={500}
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">{project.description}</p>
              <div>
                <h4 className="text-sm font-medium mb-1">Technologies:</h4>
                <p className="text-sm text-muted-foreground">
                  {project.technologies}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Project URL:</h4>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  {project.projectUrl}
                </a>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setEditingProject(project)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleDeleteProject(project.id)}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
