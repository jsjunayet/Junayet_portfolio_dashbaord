"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AppearancePage = () => {
  const [colors, setColors] = useState({
    primary: "#3B82F6",
    secondary: "#10B981",
    accent: "#8B5CF6",
    background: "#FFFFFF",
    text: "#1F2937",
  });

  const [fonts, setFonts] = useState({
    heading: "Poppins",
    body: "Inter",
  });

  const [previewMode, setPreviewMode] = useState<"light" | "dark">("light");
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  const handleColorChange = (colorName: keyof typeof colors, value: string) => {
    setColors({
      ...colors,
      [colorName]: value,
    });
  };

  const handleFontChange = (fontType: keyof typeof fonts, value: string) => {
    setFonts({
      ...fonts,
      [fontType]: value,
    });
  };

  const handleSaveAppearance = () => {};

  // Preview styles
  const lightModeStyle = {
    backgroundColor: colors.background,
    color: colors.text,
  };

  const darkModeStyle = {
    backgroundColor: "#1F2937",
    color: "#F9FAFB",
  };

  const previewStyle = previewMode === "light" ? lightModeStyle : darkModeStyle;

  const buttonStyle = {
    backgroundColor: colors.primary,
    color: "#FFFFFF",
  };

  const accentStyle = {
    backgroundColor: colors.accent,
    color: "#FFFFFF",
  };

  const secondaryStyle = {
    backgroundColor: colors.secondary,
    color: "#FFFFFF",
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Appearance</h1>
        <Button onClick={handleSaveAppearance}>Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
              <CardDescription>
                Customize the colors of your website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Primary Color</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={colors.primary}
                      onChange={(e) =>
                        handleColorChange("primary", e.target.value)
                      }
                      className="w-8 h-8 p-0 border-0"
                    />
                    <Input
                      type="text"
                      value={colors.primary}
                      onChange={(e) =>
                        handleColorChange("primary", e.target.value)
                      }
                      className="w-24"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Secondary Color</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={colors.secondary}
                      onChange={(e) =>
                        handleColorChange("secondary", e.target.value)
                      }
                      className="w-8 h-8 p-0 border-0"
                    />
                    <Input
                      type="text"
                      value={colors.secondary}
                      onChange={(e) =>
                        handleColorChange("secondary", e.target.value)
                      }
                      className="w-24"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Accent Color</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={colors.accent}
                      onChange={(e) =>
                        handleColorChange("accent", e.target.value)
                      }
                      className="w-8 h-8 p-0 border-0"
                    />
                    <Input
                      type="text"
                      value={colors.accent}
                      onChange={(e) =>
                        handleColorChange("accent", e.target.value)
                      }
                      className="w-24"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">
                    Background Color
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={colors.background}
                      onChange={(e) =>
                        handleColorChange("background", e.target.value)
                      }
                      className="w-8 h-8 p-0 border-0"
                    />
                    <Input
                      type="text"
                      value={colors.background}
                      onChange={(e) =>
                        handleColorChange("background", e.target.value)
                      }
                      className="w-24"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Text Color</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={colors.text}
                      onChange={(e) =>
                        handleColorChange("text", e.target.value)
                      }
                      className="w-8 h-8 p-0 border-0"
                    />
                    <Input
                      type="text"
                      value={colors.text}
                      onChange={(e) =>
                        handleColorChange("text", e.target.value)
                      }
                      className="w-24"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Customize the fonts of your website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Heading Font</label>
                <select
                  value={fonts.heading}
                  onChange={(e) => handleFontChange("heading", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option value="Arial">Arial</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="Poppins">Poppins</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Open Sans">Open Sans</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Body Font</label>
                <select
                  value={fonts.body}
                  onChange={(e) => handleFontChange("body", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option value="Arial">Arial</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="Inter">Inter</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Open Sans">Open Sans</option>
                  <option value="Lato">Lato</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dark Mode</CardTitle>
              <CardDescription>Configure dark mode settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Enable Dark Mode</span>
                <input
                  type="checkbox"
                  checked={isDarkModeEnabled}
                  onChange={(e) => setIsDarkModeEnabled(e.target.checked)}
                  className="rounded border-gray-300"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant={previewMode === "light" ? "default" : "outline"}
                  onClick={() => setPreviewMode("light")}
                  className="flex-1"
                >
                  Light Preview
                </Button>
                <Button
                  variant={previewMode === "dark" ? "default" : "outline"}
                  onClick={() => setPreviewMode("dark")}
                  className="flex-1"
                  disabled={!isDarkModeEnabled}
                >
                  Dark Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                See how your website will look with these settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="border rounded-lg overflow-hidden"
                style={{
                  height: "500px",
                  fontFamily: fonts.body,
                }}
              >
                {/* Website preview */}
                <div style={previewStyle} className="h-full p-6">
                  <div className="border-b pb-4 mb-4 flex justify-between items-center">
                    <h1
                      style={{ fontFamily: fonts.heading }}
                      className="text-xl font-bold"
                    >
                      Your Website
                    </h1>
                    <div className="flex gap-2">
                      <div
                        className="px-3 py-1 rounded-md text-sm"
                        style={buttonStyle}
                      >
                        Home
                      </div>
                      <div
                        className="px-3 py-1 rounded-md text-sm"
                        style={secondaryStyle}
                      >
                        Projects
                      </div>
                      <div
                        className="px-3 py-1 rounded-md text-sm"
                        style={accentStyle}
                      >
                        Contact
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h2
                      style={{ fontFamily: fonts.heading }}
                      className="text-2xl font-bold mb-2"
                    >
                      Welcome to My Portfolio
                    </h2>
                    <p className="mb-4">
                      This preview shows how your website will look with the
                      current color scheme and typography settings.
                    </p>
                    <button
                      className="px-4 py-2 rounded-md text-sm"
                      style={buttonStyle}
                    >
                      Learn More
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-md p-4">
                      <h3
                        style={{ fontFamily: fonts.heading }}
                        className="text-lg font-bold mb-2"
                      >
                        Project 1
                      </h3>
                      <p className="text-sm mb-2">
                        Description of your amazing project goes here.
                      </p>
                      <div className="flex gap-2">
                        <span
                          className="px-2 py-1 rounded-sm text-xs"
                          style={buttonStyle}
                        >
                          React
                        </span>
                        <span
                          className="px-2 py-1 rounded-sm text-xs"
                          style={secondaryStyle}
                        >
                          Node.js
                        </span>
                      </div>
                    </div>
                    <div className="border rounded-md p-4">
                      <h3
                        style={{ fontFamily: fonts.heading }}
                        className="text-lg font-bold mb-2"
                      >
                        Project 2
                      </h3>
                      <p className="text-sm mb-2">
                        Another exciting project description here.
                      </p>
                      <div className="flex gap-2">
                        <span
                          className="px-2 py-1 rounded-sm text-xs"
                          style={secondaryStyle}
                        >
                          TypeScript
                        </span>
                        <span
                          className="px-2 py-1 rounded-sm text-xs"
                          style={accentStyle}
                        >
                          MongoDB
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppearancePage;
