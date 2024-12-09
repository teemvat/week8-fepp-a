import { Link } from "react-router-dom";
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const JobListings = ({ jobs }) => {
  const { backgroundColor, color } = useContext(ThemeContext);

  return (
    <div className="job-list" style={{ backgroundColor, color }}>
      {jobs.map((job) => (
        <div className="job-preview" style={{ backgroundColor, color }} key={job.id}>
          <Link to={`/jobs/${job.id}`} style={{ color }}>
            <h2>{job.title}</h2>
          </Link>
          <p style={{ color }}>Type: {job.type}</p>
          <p style={{ color }}>Company: {job.company.name}</p>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
