import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              4 projects added this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              2 skills added this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Last updated 2 weeks ago
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">3 new messages</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your recent updates and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">
                    Updated Project: Portfolio Website
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Added new screenshots and description
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  2 hours ago
                </span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Updated Resume</p>
                  <p className="text-sm text-muted-foreground">
                    Added new skills and certifications
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">Yesterday</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Changed Theme Colors</p>
                  <p className="text-sm text-muted-foreground">
                    Updated primary and secondary colors
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  3 days ago
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Commonly used dashboard actions</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-secondary hover:bg-secondary/80 rounded-md flex flex-col items-center justify-center gap-2 transition-all">
              <span className="font-medium">Add Project</span>
            </button>
            <button className="p-4 bg-secondary hover:bg-secondary/80 rounded-md flex flex-col items-center justify-center gap-2 transition-all">
              <span className="font-medium">Update Resume</span>
            </button>
            <button className="p-4 bg-secondary hover:bg-secondary/80 rounded-md flex flex-col items-center justify-center gap-2 transition-all">
              <span className="font-medium">Edit About</span>
            </button>
            <button className="p-4 bg-secondary hover:bg-secondary/80 rounded-md flex flex-col items-center justify-center gap-2 transition-all">
              <span className="font-medium">View Messages</span>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
