/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSummarySection } from './components/ProjectsSummarySection';
import { ProjectCaseStudiesSection } from './components/ProjectCaseStudiesSection';
import { EducationSection } from './components/EducationSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DeploymentModal } from './components/DeploymentModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Top Sticky Navbar */}
      <Navbar onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Big Name, Portrait Photo, Tagline, & Quick Contact */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section with categorized badge chips */}
        <SkillsSection />

        {/* Projects Summary Section */}
        <ProjectsSummarySection onSelectProject={setSelectedProject} />

        {/* Work history / Detailed Project Case Studies Section */}
        <ProjectCaseStudiesSection onSelectProject={setSelectedProject} />

        {/* Education & Training Courses Section */}
        <EducationSection />

        {/* Contacts Section with Phone, Email, Location & Quick Mailer */}
        <ContactsSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* GitHub & Vercel Deployment Instructions Modal */}
      <DeploymentModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
