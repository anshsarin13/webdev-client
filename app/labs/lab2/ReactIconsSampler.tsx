import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdSchool, MdWork } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <p className="mt-2 text-sm">My own pair, from the md and bs families:</p>
      <div className="flex gap-3 text-3xl text-blue-600">
        <MdSchool />
        <MdWork className="text-green-600" />
      </div>
      <p className="mt-2 text-sm">Sample AI pair, from other families:</p>
      <div id="wd-ai-icons" className="flex gap-3 text-3xl">
        <BsGithub />
        <BsLinkedin className="text-blue-500" />
      </div>
    </div>
  );
}
