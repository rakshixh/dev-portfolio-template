'use client';

import styles from './PortfolioShell.module.scss';

import { useEffect, useState } from 'react';
import { colorSystem } from '../../data/colors';
import CustomCursor from '../CustomCursor/CustomCursor';
import ThemePicker from '../ThemePicker/ThemePicker';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';
import HeroSection from '../HeroSection/HeroSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import AboutSection from '../AboutSection/AboutSection';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import ContactSection from '../ContactSection/ContactSection';
import ResumeDialog from '../ResumeDialog/ResumeDialog';

export default function PortfolioShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeIndex, setThemeIndex] = useState(
    Math.max(
      0,
      colorSystem.themes.findIndex((theme) => theme.id === colorSystem.defaultTheme),
    ),
  );
  const [themeOpen, setThemeOpen] = useState(false);
  const [year, setYear] = useState(2026);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(false);

  useEffect(() => setYear(new Date().getFullYear()), []);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateCursor = () => setCursorEnabled(finePointer.matches && !reducedMotion.matches);
    updateCursor();
    finePointer.addEventListener('change', updateCursor);
    reducedMotion.addEventListener('change', updateCursor);
    return () => {
      finePointer.removeEventListener('change', updateCursor);
      reducedMotion.removeEventListener('change', updateCursor);
    };
  }, []);

  useEffect(() => {
    const theme = colorSystem.themes[themeIndex];
    Object.entries(theme.css).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }, [themeIndex]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || resumeOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, resumeOpen]);

  return (
    <main
      className={`${styles.page} ${cursorEnabled && !resumeOpen ? styles.cursorEnabled : ''}`}
      id="top"
    >
      <div className={styles.grain} aria-hidden="true" />
      <CustomCursor enabled={cursorEnabled && !resumeOpen} />
      <SiteHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onResume={() => setResumeOpen(true)}
      />
      <ThemePicker
        themeIndex={themeIndex}
        setThemeIndex={setThemeIndex}
        open={themeOpen}
        setOpen={setThemeOpen}
      />

      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
      <SiteFooter year={year} onResume={() => setResumeOpen(true)} />
      {resumeOpen && <ResumeDialog onClose={() => setResumeOpen(false)} />}
    </main>
  );
}
