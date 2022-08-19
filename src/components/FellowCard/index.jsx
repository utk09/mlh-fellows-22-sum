import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BsFillPlayCircleFill, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const FellowCard = ({ id, emailAddress, fullName, profilePhoto, projectName, threeThingsFromFellowship, fellowSuccess, fellowshipExperience, fellowTechStack, githubURL, linkedinURL, fellowFavouriteMusic, overallFellowshipExperience }) => {

  return (
    <>
      <li
        key={id}
        className="col-span-1 flex flex-col text-center bg-light-50 rounded-lg shadow divide-y divide-light-200"
      >
        <div className="flex">
          <div className="-ml-px w-0 flex-1 flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${githubURL}`}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-light-700 font-medium border border-transparent rounded-br-lg hover:text-dark-800"
            >
              <FaGithub className="w-5 h-5 text-light-400 hover:text-dark-800" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-8">
          <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
            src={profilePhoto} alt={fullName} loading="lazy" />
          <h3 className="mt-6 text-light-900 text-sm font-medium">{fullName} | {projectName}</h3>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dt className="sr-only">fellowshipExperience</dt>
            <dd className="text-light-500 text-sm text-left">{fellowshipExperience}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              {fellowTechStack &&
                <span className="px-2 py-1 text-secondary-800 text-xs font-medium bg-secondary-100 rounded-full">
                  {fellowTechStack}
                </span>
              }
            </dd>
          </dl>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-light-200">
            <div className="w-0 flex-1 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${emailAddress}`}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-light-700 font-medium border border-transparent rounded-bl-lg hover:text-quinary-500"
              >
                <MdEmail className="w-5 h-5 text-light-400 hover:text-quinary-500" aria-hidden="true" />
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${linkedinURL}`}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-light-700 font-medium border border-transparent hover:text-secondary-500"
              >
                <BsLinkedin className="w-5 h-5 text-light-400 hover:text-secondary-500" aria-hidden="true" />
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${fellowFavouriteMusic}`}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-light-700 font-medium border border-transparent rounded-br-lg hover:text-quaternary-500"
              >
                <BsFillPlayCircleFill className="w-5 h-5 text-light-400 hover:text-quaternary-500" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

FellowCard.defaultProps = {
  id: 0,
  name: "",
  fellowshipExperience: "",
  profilePhoto: "https://placeimg.com/400/225/arch",
  github: "",
  linkedin: "",
  email: "",
  music: "",
  techStack: ""
};

export default FellowCard;