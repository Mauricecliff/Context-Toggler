import useTheme from "@/context/Theme";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useState } from "react";

function TogglerComp() {
  const [isChecked, setChecked] = useState(false);
  const { lightMode, darkMode } = useTheme();
  const toggleHandler = () => {
    if (!isChecked) {
      setChecked(true);
      darkMode("dark");
    } else {
      setChecked(false);
      lightMode("light");
    }
  };

  return (
    <div className="flex items-center space-x-2 ">
      <Switch
        id="airplane-mode"
        onCheckedChange={toggleHandler}
        checked={isChecked}
      />
      <Label htmlFor="airplane-mode">Toggle Theme</Label>
    </div>
  );
}

export default TogglerComp;
