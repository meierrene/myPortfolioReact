import './Gallery.css';
import { galleryProjects } from '../../projectData';
import Project from './Project';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="h2-title">My simple-apps Gallery</h2>
      <div className="icons-container gallery">
        {galleryProjects.map(project => {
          return (
            <Project
              name={project.name}
              link={project.link}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
