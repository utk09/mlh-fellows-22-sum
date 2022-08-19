import React from 'react';
import { MdEmail } from 'react-icons/md';
import { RiChatSmile2Line, RiNumber3 } from 'react-icons/ri';
import { BsCheck2Square, BsFillPlayCircleFill, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import CustomModal from '../CustomModal';

const FellowCard = ({ id, emailAddress, fullName, profilePhoto, projectName, threeThingsFromFellowship, fellowSuccess, fellowTechStack, githubURL, linkedinURL, fellowFavouriteMusic, overallFellowshipExperience }) => {

  return (
    <>
      <li
        key={id}
        className="col-span-1 flex flex-col text-center bg-neutral rounded-lg shadow divide-y divide-neutral-content"
      >
        <div className="flex">
          <div className="-ml-px w-0 flex-1 flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${githubURL}`}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-br-lg hover:text-base-content"
            >
              <FaGithub className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-8">
          <div className="avatar">
            <div className="w-32 h-32 flex-shrink-0 mx-auto rounded-full ring ring-neutral-content ring-offset-base-100 ring-offset-2">
              <img src={profilePhoto}
                alt={fullName} loading="lazy" />
            </div>
          </div>
          <h3 className="mt-6 text-sm font-medium">
            <span className="text-secondary">{fullName}</span> | {projectName}</h3>
          <div className="flex-1 flex flex-row p-2 mx-auto">
            <CustomModal
              id={`${id}${threeThingsFromFellowship}`}
              modalIcon={<RiNumber3 />}
              modalTitle="Three things I learnt from Fellowship"
              modalDescription={threeThingsFromFellowship} />
            <CustomModal
              id={`${id}${fellowSuccess}`}
              modalIcon={<BsCheck2Square />}
              modalTitle="My Successes"
              modalDescription={fellowSuccess} />
            <CustomModal
              id={`${id}${overallFellowshipExperience}`}
              modalIcon={<RiChatSmile2Line />}
              modalTitle="My overall fellowship experience"
              modalDescription={overallFellowshipExperience} />
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <span className="sr-only">Fellow Tech Stack</span>
            <div className="card w-auto bg-base-100 shadow-xl">
              <div className="py-4 px-4">
                <p className="">
                  {fellowTechStack &&
                    <span className="py-1 text-xs font-medium">
                      {fellowTechStack}
                    </span>
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-neutral-content">
            <div className="w-0 flex-1 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${emailAddress}`}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-neutral-content font-medium border border-transparent rounded-bl-lg hover:text-error"
              >
                <MdEmail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${linkedinURL}`}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-neutral-content font-medium border border-transparent hover:text-primary"
              >
                <BsLinkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${fellowFavouriteMusic}`}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-neutral-content font-medium border border-transparent rounded-br-lg hover:text-success"
              >
                <BsFillPlayCircleFill className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

FellowCard.defaultProps = {
  id: '0',
  emailAddress: 'NA',
  fullName: 'NA',
  profilePhoto: 'NA',
  projectName: 'NA',
  threeThingsFromFellowship: 'NA',
  fellowSuccess: 'NA',
  fellowTechStack: 'NA',
  githubURL: 'NA',
  linkedinURL: 'NA',
  fellowFavouriteMusic: 'NA',
  overallFellowshipExperience: 'NA'
};

export default FellowCard;