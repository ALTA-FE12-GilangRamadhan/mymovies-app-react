import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import Navbar from "../components/Navbar";

import movies from "../dummy/movies.json";
import { withRouter } from "../utils/navigation";
import { MovieType } from "../utils/types/movie";

interface PropsType {
  params?: any;
}

interface StateType {
  data: MovieType;
}

// export class Detail extends Component<PropsType, StateType> {
//   constructor(props: PropsType) {
//     super(props);
//     this.state = {
//       data: {},
//     };
//   }

//   async getMovie() {
//     const { id_movie } = this.props.params;
//     axios
//       .get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
//       .then((response) => {
//         console.log("data: ", response.data);
//         this.setState({ data: response.data });
//       })
//       .catch((error) => {
//         console.log("error: ", error);
//       });
//   }

//   componentDidMount() {
//     this.getMovie();
//   }

//   render() {
//     return (
//       <>
//         <Navbar />
//         <div className="flex justify-center">
//           <div className="card card-side bg-base-100 shadow-xl p-5 w-3/4">
//             <figure>
//               <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} width={500} alt={this.state.data.title} />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{this.state.data.title}</h2>
//               <ul>
//                 <li>Runtime: {this.state.data.runtime} </li>
//                 <li>Release date: {this.state.data.release_date} </li>
//                 <li>
//                   Genre: {""}{" "}
//                   {this.state.data.genres
//                     ?.map((genre) => {
//                       return genre.name;
//                     })
//                     .join(", ")}{" "}
//                 </li>
//                 <li>Language: {this.state.data.original_language}</li>
//                 <li>Overview: {this.state.data.overview}</li>
//               </ul>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Watch</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default withRouter(Detail);

// import React from "react";

const Detail = () => {
  const { id_movie } = useParams();
  const [data, setData] = useState<MovieType>({});

  function getMovie() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&append_to_response=videos`)
      .then((data) => {
        // const data = data.data;
        setData(data.data);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="card card-side bg-base-100 shadow-xl p-5 w-3/4">
          <figure>
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} width={500} alt={data.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <ul>
              <li>Runtime: {data.runtime} </li>
              <li>Release date: {data.release_date} </li>
              <li>
                Genre:{" "}
                {data.genres
                  ?.map((genre) => {
                    return genre.name;
                  })
                  .join(", ")}
              </li>
              <li>Language: {data.original_language}</li>
              <li>Overview: {data.overview}</li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
