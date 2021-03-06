/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import Google from "@mui/icons-material/Google";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
import Presentation from "layouts/pages/presentation";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";

const preUrl = "/paginaPreParto";

const routes = [
  {
    name: "Home",
    key: "Home",
    icon: <GitHubIcon />,
    route: `${preUrl}/`,
    component: <Presentation />,
  },
  {
    name: "pages",
    key: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        key: "landing pages",
        collapse: [
          {
            name: "about us",
            key: "about us",
            route: `${preUrl}/pages/landing-pages/about-us`,
            component: <AboutUs />,
          },
          {
            name: "contact us",
            key: "contact us",
            route: `${preUrl}/pages/landing-pages/contact-us`,
            component: <ContactUs />,
          },
          {
            name: "author",
            key: "author",
            route: `${preUrl}/pages/landing-pages/author`,
            component: <Author />,
          },
        ],
      },
      {
        name: "account",
        key: "account",
        collapse: [
          {
            name: "sign in",
            key: "account",
            route: `${preUrl}/pages/authentication/sign-in`,
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "sections",
    key: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "page sections",
        key: "page sections",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "page headers",
            key: "page headers",
            route: `${preUrl}sections/page-sections/page-headers`,
            component: <PageHeaders />,
          },
          {
            name: "features",
            key: "features",
            route: `${preUrl}/sections/page-sections/features`,
            component: <Features />,
          },
        ],
      },
      {
        name: "navigation",
        key: "navigation",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "navbars",
            key: "navbars",
            route: `${preUrl}/sections/navigation/navbars`,
            component: <Navbars />,
          },
          {
            name: "nav tabs",
            key: "nav tabs",
            route: `${preUrl}/sections/navigation/nav-tabs`,
            component: <NavTabs />,
          },
          {
            name: "pagination",
            key: "pagination",
            route: `${preUrl}/sections/navigation/pagination`,
            component: <Pagination />,
          },
        ],
      },
      {
        name: "input areas",
        key: "input areas",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "inputs",
            key: "input",
            route: `${preUrl}/sections/input-areas/inputs`,
            component: <Inputs />,
          },
          {
            name: "forms",
            key: "forms",
            route: `${preUrl}/sections/input-areas/forms`,
            component: <Forms />,
          },
        ],
      },
      {
        name: "attention catchers",
        key: "attention catchers",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            key: "alerts",
            route: `${preUrl}/sections/attention-catchers/alerts`,
            component: <Alerts />,
          },
          {
            name: "modals",
            key: "modals",
            route: `${preUrl}/sections/attention-catchers/modals`,
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            key: "tooltips & popovers",
            route: `${preUrl}/sections/attention-catchers/tooltips-popovers`,
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "elements",
        key: "elements",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            key: "avatars",
            route: `${preUrl}/sections/elements/avatars`,
            component: <Avatars />,
          },
          {
            name: "badges",
            key: "badges",
            route: `${preUrl}/sections/elements/badges`,
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            key: "breadcrumbs",
            route: `${preUrl}/sections/elements/breadcrumbs`,
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            key: "buttons",
            route: `${preUrl}/sections/elements/buttons`,
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            key: "dropdowns",
            route: `${preUrl}/sections/elements/dropdowns`,
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            key: "progress bars",
            route: `${preUrl}/sections/elements/progress-bars`,
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            key: "toggles",
            route: `${preUrl}/sections/elements/toggles`,
            component: <Toggles />,
          },
          {
            name: "typography",
            key: "typography",
            route: `${preUrl}/sections/elements/typography`,
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: "docs",
    key: "docs",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        key: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        key: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        key: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        key: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "Google",
    key: "Google",
    icon: <Google />,
    href: "https://www.google.com/",
  },
];

export const rutasLogueado = [
  {
    name: "Login",
    key: "Login",
    icon: <GitHubIcon />,
    route: `${preUrl}/Login`,
    component: <SignIn />,
  },
];

export default routes;
