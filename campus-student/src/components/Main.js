import React from 'react';
import { Routes, Route } from "react-router-dom";
/* 
    This is you entry point for your routes
*/
const Main = () => {
    return (
        <div>
            <nav>Welcome!</nav>
            <main>
                <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
                <p>This seems like a nice place to get started with some Routes!</p>
            </main>
        </div>
    );
};

export default Main;




// 	return (
// 		<div id="main">
// 			<div className="column container">
// 				<div id="header">
// 					<h1>Readium</h1>
// 					<Navbar />
// 				</div>
// 			</div>
// 			<Routes>
// 				<Route path="/stories" element={<AllStories />} />
// 				<Route path="/authors" element={<AllAuthors />} />
// 				<Route path="/stories/:storyId/*" element={<SingleStory />} />
// 				<Route path="/authors/:authorId/*" element={<SingleAuthor />} />
// 				<Route path="/" element={<AllStories />} />
// 			</Routes>
// 		</div>
// 	);
// };
