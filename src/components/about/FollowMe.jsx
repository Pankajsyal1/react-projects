import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"

const FollowMe = () => {
  return (
    <ul className="flex gap-3">
      <li>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/pankaj-kumar-a1641ba6/" target="_blank">
          <Linkedin />
        </a>
      </li>
      <li>
        <a aria-label="Github" href="https://github.com/Pankajsyal1" target="_blank">
          <Github />
        </a>
      </li>
    </ul>
  )
}

export default FollowMe