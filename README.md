# MovieApp

## Description
A movie listing app where users can search for movies, view details, and add favorites.

## Installation
1. Clone the repository:

```bash
    git clone <repository-url>

    bun install

    bun run rev
```

## Features
- Search for movies from tmdb
- Add movies to favorites (stored in local storage).

## Technologies 
- Next.js
- TMDB API
- LocalStorage

## Challenges faced
#### Not having prior knowledge of Next.js framework as my background was in Angular 
I had to spend some time understanding first react itself by building the
[tic-tac-toe game](https://reactjs.org/tutorial/tutorial.html) and 
then understanding Next.js by building a simple app. Again following 
the Nextjs tutorial [here](https://nextjs.org/learn/dashboard-app).

> [!NOTE]  
> This took me around a day or two to understand nextjs and be able to 
build something.

#### Since I didn't know much about react states , by extension hardship in Zustand implementation
As a beginner in react, I was able to follow its documentation and make some
basic app using it to understand it but once I tried adding it to the next app
It took a long time , I had to read the documentation again and again and
and took another day learning it , eventually I **decided to drop using it
since I had limited time to finish the project**.

> [!NOTE]  
> This took me around a day until I decided I have to drop it to focus on the
MVPs.

> [!NOTE]  
> I believe I misunderstood how I would use states in the start of the project
as now nearing the completion I used states and could have implemented zustand
in the same way then.

#### Final pages not mobile , responsive
I understood since the deadline was tuesday I can finish around 12am 
and so I was almost done but since I had a call with the HR I had to rush
so I can finish the project and hence couldn't make the title page responsive
nor the favorites page.
So I can finish the MVPs and submit it.

#### Favorites button effect not working , likely because I am not using a state management
Only functionality works but not changing its effect works when clicked

#### MVPs
Explain what your MVPs are and why you think they are the most important features to implement.

Mvps to me were , **movie search , movie details and favorites**.
**Why** ? because the user can search for movies and check their details and add them to favorites

How it was done didn't seem to be the most important thing in the project currently.
So that's why I didn't add zustand to the mvps. Although I will be spending some time
in its documentation to understand it for future.

So I made sure to make the user be able to search movies and check their details 
as well as have a page of favorites
And made sure I treated responsiveness as an mvp as well since this 
impacts the user experience.

I sadly couldn't make the title page responsive due to me not being able 
to finish on time though I was really close.

## Author 
- [Alhussien Ahmed](https://github.com/donRehan)
