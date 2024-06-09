import React from "react";
import styles from "./Skills.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";
import SkillList from "../../common/SkillList";

const Skills = () => {
  const { theme } = useTheme();
  const checkmarkIcon =
    theme === "dark" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList icon={checkmarkIcon} name={"HTML"} />
        <SkillList icon={checkmarkIcon} name={"CSS"} />
        <SkillList icon={checkmarkIcon} name={"JAVASCRIPT"} />
        <SkillList icon={checkmarkIcon} name={"TYPESCRIPT"} />
        <SkillList icon={checkmarkIcon} name={"NodeJS"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={checkmarkIcon} name={"React"} />
        <SkillList icon={checkmarkIcon} name={"Angular"} />
        <SkillList icon={checkmarkIcon} name={"Tailwind CSS"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={checkmarkIcon} name={"Git"} />
        <SkillList icon={checkmarkIcon} name={"Bootstrap"} />
      </div>
    </section>
  );
};

export default Skills;
