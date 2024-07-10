// services scroller
const scrollers = document.querySelectorAll(".section5_scroller");

const digitalBadge = document.getElementById("digital-badge");
const resourceManagement = document.getElementById("resource-management");
const facilityGantry = document.getElementById("facility-gantry");
const fleetManagement = document.getElementById("fleet-management");
const hrTrainingFinances = document.getElementById("hr-training-finances");
const dronesDeployment = document.getElementById("drones-deployment");
const disasterReliefCoordination = document.getElementById(
  "disaster-relief-coordination"
);
const supplyChainManagement = document.getElementById(
  "supply-chain-management"
);
const automationRobotics = document.getElementById("robotics");
const capabilityDevelopment = document.getElementById("capability-development");

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }
// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     scroller.setAttribute("data-animated", true);

//     const scrollerInner = scroller.querySelector(".application_list");
//     const scrollerItems = Array.from(scrollerInner.children);

//     scrollerItems.forEach((item) => {
//       const itemLastChild = item.lastChild;
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//       duplicatedItem.lastChild.previousSibling.id =
//         item.lastChild.previousSibling.getAttribute("id") + "-2";
//     });
//   });
// }

// const digitalBadge2 = document.getElementById("digital-badge-2");
// const resourceManagement2 = document.getElementById("resource-management-2");
// const facilityGantry2 = document.getElementById("facility-gantry-2");
// const fleetManagement2 = document.getElementById("fleet-management-2");
// const hrTrainingFinances2 = document.getElementById("hr-training-finances-2");
// const dronesDeployment2 = document.getElementById("drones-deployment-2");
// const disasterReliefCoordination2 = document.getElementById(
//   "disaster-relief-coordination-2"
// );
// const supplyChainManagement2 = document.getElementById(
//   "supply-chain-management-2"
// );
// const automationRobotics2 = document.getElementById("robotics-2");
// const capabilityDevelopment2 = document.getElementById(
//   "capability-development-2"
// );

const tabContent = document.getElementById("tab-content");

const content = [
  `An app that serves as your digital identity, capable of storing various types of files and documents (Barangay ID, PhilHealth, SSS, CVs, etc.) to simplify the process when these documents are required.
  It features an Applicant/User UI, allowing users to enter their personal details and photos, and submit files and documents for application.
  It also includes an Admin UI for verifying applicants and their submitted documents.
  This app enhances the application processes of corporations and universities.
  It also aids applicants in improving their applications (resumes, student COR) through its functionalities.
  Moreover, it reduces expenses associated with obtaining documents such as transportation and paper costs.`,
  `The gantry system is used to open and close a door automatically, enhancing convenience and efficiency in access control.`,
  `An application designed to streamline the allocation and oversight of organisational resources, enabling users to efficiently manage and optimise resource usage across various departments or projects.`,
  `An application that assists in the management of company vehicles, providing details such as vehicle reports, travel history, and current status.
  It can generate a logbook containing information such as driver names, routes, and locations, and allows users to view the current status and location of vehicles. Additionally, it facilitates requests for assistance during vehicle breakdowns and other emergencies.`,
  `Training, HR, and Finances are crucial aspects of organisational management, requiring meticulous coordination and strategic oversight to ensure optimal performance and resource allocation.`,
  `Drones deployment involves strategic planning and precise execution to leverage unmanned aerial vehicles effectively for various applications such as surveillance, delivery, and infrastructure inspection.`,
  `The Disaster Relief Coordination app facilitates user coordination with LGUs to enhance and optimise rescues, distribute relief goods, and provide on-land assistance during disasters, featuring a map of affected areas indicating resource locations and updates, notifications for users about resource availability, inter-LGU chat for swift coordination, and user requests for specific assistance. It aims to achieve faster responses, efficient LGU coordination, real-time user updates, and improved situational assessment.`,
  `Supply Chain Management involves the strategic coordination and oversight of the flow of goods and services, encompassing procurement, production, inventory management, logistics, and distribution to optimise efficiency and meet organisational objectives.`,
  `Process automation and robotics involve the integration of automated systems and robotic technology to streamline operations, enhance productivity, and achieve precision in manufacturing, logistics, and various industries.`,
  `Capability development involves strategically enhancing and expanding skills, knowledge, and resources within an organisation to foster growth, innovation, and adaptability in response to changing demands and challenges.`,
];

// const displayContent = (items) => {
//   let listContent = "";
//   for (const item of items) {
//     listContent += `<p>${item}</p>`;
//   }
//   tabContent.append(listContent);
// };

const handleClick = (event) => {
  const btnId = event.target.id;

  if (btnId) {
    tabContent.innerHTML = "";
  }

  if (btnId === "digital-badge" || btnId === "digital-badge-2") {
    tabContent.innerHTML += `<p style="margin:0;">${content[0]}</p>`;
    tabContent.style.display = "block";
  } else if (btnId === "facility-gantry" || btnId === "facility-gantry-2") {
    tabContent.innerHTML += `<p style="margin:0;">${content[1]}</p>`;
    tabContent.style.display = "block";
  } else if (
    btnId === "resource-management" ||
    btnId === "resource-management-2"
  ) {
    tabContent.innerHTML += `<p style="margin:0;">${content[2]}</p>`;
    tabContent.style.display = "block";
  } else if (btnId === "fleet-management" || btnId === "fleet-management-2") {
    tabContent.innerHTML += `<p style="margin:0;">${content[3]}</p>`;
    tabContent.style.display = "block";
  } else if (
    btnId === "hr-training-finances" ||
    btnId === "hr-training-finances-2"
  ) {
    tabContent.innerHTML += `<p style="margin:0;">${content[4]}</p>`;
    tabContent.style.display = "block";
  } else if (btnId === "drones-deployment" || btnId === "drones-deployment-2") {
    tabContent.innerHTML += `<p style="margin:0;">${content[5]}</p>`;
    tabContent.style.display = "block";
  } else if (
    btnId === "disaster-relief-coordination" ||
    btnId === "disaster-relief-coordination-2"
  ) {
    tabContent.innerHTML += `<p style="margin:0;">${content[6]}</p>`;
    tabContent.style.display = "block";
  } else if (
    btnId === "supply-chain-management" ||
    btnId === "supply-chain-management-2"
  ) {
    tabContent.innerHTML += `<p style="margin:0;">${content[7]}</p>`;
    tabContent.style.display = "block";
  } else if (btnId === "robotics" || btnId === "robotics-2") {
    tabContent.innerHTML += `<p style="margin:0;">${content[8]}</p>`;
    tabContent.style.display = "block";
  } else if (
    btnId === "capability-development" ||
    btnId === "capability-development-2"
  ) {
    tabContent.innerHTML += `<p style="margin:0;">${content[9]}</p>`;
    tabContent.style.display = "block";
  }
};

digitalBadge.addEventListener("click", handleClick);
facilityGantry.addEventListener("click", handleClick);
resourceManagement.addEventListener("click", handleClick);
fleetManagement.addEventListener("click", handleClick);
hrTrainingFinances.addEventListener("click", handleClick);
dronesDeployment.addEventListener("click", handleClick);
disasterReliefCoordination.addEventListener("click", handleClick);
supplyChainManagement.addEventListener("click", handleClick);
automationRobotics.addEventListener("click", handleClick);
capabilityDevelopment.addEventListener("click", handleClick);

// digitalBadge2.addEventListener("click", handleClick);
// facilityGantry2.addEventListener("click", handleClick);
// resourceManagement2.addEventListener("click", handleClick);
// fleetManagement2.addEventListener("click", handleClick);
// hrTrainingFinances2.addEventListener("click", handleClick);
// dronesDeployment2.addEventListener("click", handleClick);
// disasterReliefCoordination2.addEventListener("click", handleClick);
// supplyChainManagement2.addEventListener("click", handleClick);
// automationRobotics2.addEventListener("click", handleClick);
// capabilityDevelopment2.addEventListener("click", handleClick);
