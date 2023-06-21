import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"
const Movie = async() => {
    
  const url = process.env.RAPID_KEY
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9a76ff5c4dmshed2103af26fa8edp1c1348jsnaf3d7cab2abf',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

	const response = await fetch(url, options);
	const result = await response.json();
    const main_data = result.titles;
	// console.log(main_data[0]);

  
  return (
    <section className={styles.movieSection}>
        <div className={styles.container}>
            <h1>Series & Movies</h1>
            <div className={styles.card_section}>
            {
                main_data.map((currElem)=>
                    <MovieCard key={currElem.id} {...currElem}/>
                )
            }
            </div>
        </div>
    </section>

  )
};

export default Movie;
