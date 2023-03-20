import { FaGamepad, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { BiCodeCurly } from 'react-icons/bi';
import { VscDebugConsole } from "react-icons/vsc";
import { ImBooks } from 'react-icons/im';
import { GrCertificate } from "react-icons/gr";

export const topics = [
    {
        name: 'frontend',
        icon: <FaLaptopCode />,
    },
    {
        name: 'mobile',
        icon: <MdOutlineDeveloperMode />,
    },
    {
        name: 'games',
        icon: <FaGamepad />,
    },
    {
        name: 'backend',
        icon: <BiCodeCurly />,
    },
    {
        name: 'databases',
        icon: <FaDatabase />,
    },
    {
        name: 'testing',
        icon: <VscDebugConsole />,
    },
    {
        name: 'books',
        icon: <ImBooks />,
    },
    {
        name: 'certificates',
        icon: <GrCertificate />,
    },
];

export const footerList1 = [
    'About',
    'Newsroom',
    'Store',
    'Contact',
    'Carrers',
    'ByteDance',
    'Creator Directory',
];
export const footerList2 = [
    'TikTik for Good',
    'Advertise',
    'Developers',
    'Transparency',
    'TikTik Rewards',
];
export const footerList3 = [
    'Help',
    'Safety',
    'Terms',
    'Privacy',
    'Creator Portal',
    'Community Guidelines',
];