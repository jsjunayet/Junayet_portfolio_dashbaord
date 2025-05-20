"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Skill {
  id: string;
  name: string;
  proficiency: number;
}

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState<
    "experience" | "education" | "skills"
  >("experience");

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      title: "Senior Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: "2020-01",
      endDate: "Present",
      description:
        "Led development team on multiple projects, implemented CI/CD pipelines, and architected scalable solutions.",
    },
    {
      id: "2",
      title: "Web Developer",
      company: "Creative Agency",
      location: "New York, NY",
      startDate: "2017-06",
      endDate: "2019-12",
      description:
        "Developed responsive websites and web applications for various clients.",
    },
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      degree: "Master of Computer Science",
      institution: "University of Technology",
      location: "Boston, MA",
      startDate: "2015",
      endDate: "2017",
      description: "Focused on software engineering and machine learning.",
    },
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "React", proficiency: 90 },
    { id: "2", name: "JavaScript", proficiency: 95 },
    { id: "3", name: "TypeScript", proficiency: 85 },
    { id: "4", name: "Node.js", proficiency: 80 },
    { id: "5", name: "CSS/SCSS", proficiency: 90 },
  ]);

  const [newExperience, setNewExperience] = useState<Omit<Experience, "id">>({
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [newEducation, setNewEducation] = useState<Omit<Education, "id">>({
    degree: "",
    institution: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [newSkill, setNewSkill] = useState<Omit<Skill, "id">>({
    name: "",
    proficiency: 50,
  });

  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [isAddingEducation, setIsAddingEducation] = useState(false);
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const handleAddExperience = () => {
    const id = Date.now().toString();
    setExperiences([...experiences, { ...newExperience, id }]);
    setNewExperience({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsAddingExperience(false);
  };

  const handleAddEducation = () => {
    const id = Date.now().toString();
    setEducation([...education, { ...newEducation, id }]);
    setNewEducation({
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsAddingEducation(false);
  };

  const handleAddSkill = () => {
    const id = Date.now().toString();
    setSkills([...skills, { ...newSkill, id }]);
    setNewSkill({
      name: "",
      proficiency: 50,
    });
    setIsAddingSkill(false);
  };

  const handleDeleteExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const handleDeleteEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const handleDeleteSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Resume</h1>
      </div>

      <div className="flex border-b">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "experience"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "education"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "skills"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </div>

      {activeTab === "experience" && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <Button onClick={() => setIsAddingExperience(true)}>
              Add Experience
            </Button>
          </div>

          {isAddingExperience && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Add New Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title</label>
                    <Input
                      value={newExperience.title}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          title: e.target.value,
                        })
                      }
                      placeholder="Senior Developer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <Input
                      value={newExperience.company}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          company: e.target.value,
                        })
                      }
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    value={newExperience.location}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        location: e.target.value,
                      })
                    }
                    placeholder="City, State"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Start Date</label>
                    <Input
                      type="month"
                      value={newExperience.startDate}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          startDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Date</label>
                    <Input
                      type="month"
                      value={newExperience.endDate}
                      onChange={(e) =>
                        setNewExperience({
                          ...newExperience,
                          endDate: e.target.value,
                        })
                      }
                      placeholder="Present"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={newExperience.description}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        description: e.target.value,
                      })
                    }
                    placeholder="Describe your responsibilities and achievements"
                    rows={4}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleAddExperience}>Save Experience</Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddingExperience(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="text-muted-foreground">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
                <div className="flex justify-end mt-4">
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteExperience(exp.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "education" && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <Button onClick={() => setIsAddingEducation(true)}>
              Add Education
            </Button>
          </div>

          {isAddingEducation && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Add New Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Degree</label>
                    <Input
                      value={newEducation.degree}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          degree: e.target.value,
                        })
                      }
                      placeholder="Bachelor of Science"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Institution</label>
                    <Input
                      value={newEducation.institution}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          institution: e.target.value,
                        })
                      }
                      placeholder="University Name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    value={newEducation.location}
                    onChange={(e) =>
                      setNewEducation({
                        ...newEducation,
                        location: e.target.value,
                      })
                    }
                    placeholder="City, State"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Start Year</label>
                    <Input
                      value={newEducation.startDate}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          startDate: e.target.value,
                        })
                      }
                      placeholder="2015"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Year</label>
                    <Input
                      value={newEducation.endDate}
                      onChange={(e) =>
                        setNewEducation({
                          ...newEducation,
                          endDate: e.target.value,
                        })
                      }
                      placeholder="2019"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={newEducation.description}
                    onChange={(e) =>
                      setNewEducation({
                        ...newEducation,
                        description: e.target.value,
                      })
                    }
                    placeholder="Describe your education, achievements, etc."
                    rows={4}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleAddEducation}>Save Education</Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddingEducation(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {education.map((edu) => (
            <Card key={edu.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
                <div className="flex justify-end mt-4">
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteEducation(edu.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "skills" && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <Button onClick={() => setIsAddingSkill(true)}>Add Skill</Button>
          </div>

          {isAddingSkill && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Add New Skill</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Skill Name</label>
                  <Input
                    value={newSkill.name}
                    onChange={(e) =>
                      setNewSkill({ ...newSkill, name: e.target.value })
                    }
                    placeholder="JavaScript"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Proficiency</label>
                    <span className="text-sm text-muted-foreground">
                      {newSkill.proficiency}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={newSkill.proficiency}
                    onChange={(e) =>
                      setNewSkill({
                        ...newSkill,
                        proficiency: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleAddSkill}>Save Skill</Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddingSkill(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <Card key={skill.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handleDeleteSkill(skill.id)}
                    >
                      &times;
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Proficiency
                      </span>
                      <span className="text-sm font-medium">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePage;
