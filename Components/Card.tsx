// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  liveProject?: string;
  buttonLabel?: string;
  hasContent: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  liveProject,
  buttonLabel = "VIEW MORE",
  hasContent,
}) => {
  return (
    <div
  className={`p-4 border  ${
    hasContent ? 'bg-white' : 'bg-black'
  } w-full max-w-sm mx-auto flex flex-col justify-between transform transition duration-300 hover:scale-105`}
  style={{ minHeight: '250px' }} // Adjust minHeight as needed
>
  {hasContent && (
    <>
      <div>
        <h3 className="text-lg font-bold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <p className="text-sm italic text-gray-600 mt-2">{description}</p>
        {liveProject && (
          <p className="mt-3 text-gray-700 overflow-hidden text-sm">
            <span className="font-bold">Live Project:</span>{' '}
            <a
              href={liveProject}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Improves security by preventing the new page from accessing the original page
              className="text-blue-600 underline hover:text-blue-800"
            >
              {liveProject}
            </a>
          </p>
        )}
      </div>
      <div className=" flex justify-center">
        <button className="px-4 py-2 bg-[#5F8184] text-white rounded-lg hover:bg-teal-600">
          {buttonLabel}
        </button>
      </div>
    </>
  )}
</div>

  );
};

export default Card;
