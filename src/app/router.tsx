import { createBrowserRouter } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout/PageLayout';
import { Home } from '../pages/Home/Home';
import { Services } from '../pages/Services/Services';
import { Pricing } from '../pages/Pricing/Pricing';
import { Portfolio } from '../pages/Portfolio/Portfolio';
import { ProjectDetail } from '../pages/ProjectDetail/ProjectDetail';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { NotFound } from '../pages/NotFound/NotFound';
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageLayout>
        <Home />
      </PageLayout>
    ),
  },
  {
    path: '/services',
    element: (
      <PageLayout>
        <Services />
      </PageLayout>
    ),
  },
  {
    path: '/pricing',
    element: (
      <PageLayout>
        <Pricing />
      </PageLayout>
    ),
  },
  {
    path: '/portfolio',
    element: (
      <PageLayout>
        <Portfolio />
      </PageLayout>
    ),
  },
  {
    path: '/portfolio/',
    element: (
      <PageLayout>
        <Portfolio />
      </PageLayout>
    ),
  },
  {
    path: '/portfolio/:slug',
    element: (
      <PageLayout>
        <ProjectDetail />
      </PageLayout>
    ),
  },
  {
    path: '/about',
    element: (
      <PageLayout>
        <About />
      </PageLayout>
    ),
  },
  {
    path: '/contact',
    element: (
      <PageLayout>
        <Contact />
      </PageLayout>
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <PageLayout>
        <PrivacyPolicy />
      </PageLayout>
    ),
  },
  {
    path: '*',
    element: (
      <PageLayout>
        <NotFound />
      </PageLayout>
    ),
  },
]);
