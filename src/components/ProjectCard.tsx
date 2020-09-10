import React from 'react';
import { ReactComponent as GitHubLogo } from '../assets/githubLogo.svg';
import { ReactComponent as ExternalLinkLogo } from '../assets/externalLink.svg';


interface IProps {
  name: string,
  description: string,
  githubLink: string,
  projectLink: string,
  technologies: Array<string>,
  heroImageLarge: string,
  heroImageSmall: string,
  heroImageLargeWebp: string,
  heroImageSmallWebp: string
}

const ProjectCard = ({ name, description, githubLink, projectLink, technologies, heroImageLarge, heroImageSmall, heroImageLargeWebp, heroImageSmallWebp }: IProps) => {
  const imageSmall = process.env.PUBLIC_URL + heroImageSmall;
  const imageLarge = process.env.PUBLIC_URL + heroImageLarge;
  const webpSmall = process.env.PUBLIC_URL + heroImageSmallWebp;
  const webpLarge = process.env.PUBLIC_URL + heroImageLargeWebp;
  const technologyListItems = technologies.map((technology) => <li className="mb-3">{technology}</li>);

  return (
    <div className="my-10 flex flex-col space-y-5 text-gray-500 md:text-lg border-solid border rounded shadow-md border-transparent p-5">
      <div className="flex justify-between items-center text-gray-500">
        <h4 className="text-gray-500 font-bold text-2xl transition duration-500 ease-in-out inline-block hover:border-transparen hover:text-gray-700 mr-3 transform hover:-translate-y-1 hover:scale-110">
          <a href={projectLink}>
            {name}
          </a>
        </h4>
        <div className="flex flex-wrap items-center">
          <a href={githubLink} className="block flex items-center transition duration-500 ease-in-out inline-block hover:border-transparen hover:text-gray-700 mr-3 transform hover:-translate-y-1 hover:scale-110" rel="nofollow noopener noreferrer" target="_blank">
            <GitHubLogo className="fill-current w-6 h-6" />
          </a>
          <a href={projectLink} className="block flex items-center transition duration-500 ease-in-out inline-block hover:border-transparen hover:text-gray-700 mr-3 transform hover:-translate-y-1 hover:scale-110" rel="nofollow noopener noreferrer" target="_blank">
            <ExternalLinkLogo className="fill-current w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex justify-center border border-transparent shadow-sm">
        <a href={projectLink}>
          <picture>
            <source media="(min-width: 450px)" srcSet={`${webpLarge}, ${imageLarge}`} />
            <source srcSet={`${webpSmall}, ${imageSmall}`} />
            <img src={imageLarge} alt={name + 'example image'} loading="lazy"></img>
          </picture>
        </a>
      </div>
      <div>
        <p>
          {description}
        </p>
      </div>
      <ul className="text-gray-500 text-xs md:text-sm grid grid-cols-2 sm:w-3/4 md:w-full">
        {technologyListItems}
      </ul>
    </div>
  )
}

export default ProjectCard;
