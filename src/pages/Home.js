// @ts-check
import React from "react";
import { FaGithub } from "react-icons/fa";
import FellowCard from "../components/FellowCard";
import MLHTeamCard from "../components/MLHTeamCard";
import { FellowsData } from "../data/FellowsData";
import { MLHTeamData } from "../data/MLHTeamData";

const FELLOWS_PHOTO_PATH = "/fellows/photos/";

const Home = () => {
  return (
    <>
      <div>
        <section className="relative overflow-hidden bg-base-300 pt-16 pb-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2 relative">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl tracking-tight text-primary sm:text-4xl">
                22.SUM.8 | Solana Sharks
              </h1>
              <p className="mt-4 text-lg text-primary">
                Batch of Summer 2022, Solana Sharks is a group of 14 students
                from all over the world. The team worked on two projects: Solana
                Bounty (4 fellows) and Solana Whitelisting Contract (10
                fellows).
              </p>
            </div>
          </div>
          <div className="flex float-right pr-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/utk09/mlh-fellows-22-sum"
              className="mt-8 inline-flex items-center justify-center border border-transparent shadow-lg text-base font-medium rounded-md text-light-200 hover:bg-light-900 sm:w-auto"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </section>

        <section>
          <div className="bg-light-100">
            <div className="mx-auto py-6 px-2 max-w-7xl sm:px-6 lg:px-4 lg:py-12">
              <div className="space-y-12">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-senary-500">
                  Message from MLH Team
                </h2>

                <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                  {MLHTeamData.map((mlhteam) => (
                    <MLHTeamCard
                      key={mlhteam.id}
                      id={mlhteam.id}
                      name={mlhteam.name}
                      role={mlhteam.role}
                      profilePhoto={mlhteam.profilePhoto}
                      message={mlhteam.message}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-10" />
        <section>
          <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-4 relative">
            <div className="mx-auto text-center">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {FellowsData.map((fellow) => (
                  <FellowCard
                    key={fellow.id}
                    id={fellow.id}
                    emailAddress={fellow.emailAddress}
                    fullName={fellow.fullName}
                    profilePhoto={`${FELLOWS_PHOTO_PATH}${fellow.profilePhoto}`}
                    projectName={fellow.projectName}
                    threeThingsFromFellowship={fellow.threeThingsFromFellowship}
                    fellowSuccess={fellow.fellowSuccess}
                    fellowTechStack={fellow.fellowTechStack}
                    githubURL={fellow.githubURL}
                    linkedinURL={fellow.linkedinURL}
                    fellowFavouriteMusic={fellow.fellowFavouriteMusic}
                    overallFellowshipExperience={
                      fellow.overallFellowshipExperience
                    }
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
