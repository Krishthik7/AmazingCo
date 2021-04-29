# KarthikProj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Development server

This project requires the installation of NodeJS to work, go to: (https://nodejs.org/es/) and install the latest version. 

The first step is to install angular, to do it, you need to open the terminal and type:

`npm install -g @angular/cli`

After installing angular, you need to go to the folder you installed the project.

Once there, you install dependencies with `npm -i` on your console.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## approach taken for the project

At first sight. This problem has 2 big parts: Prices and Discounts. I based my whole idea of solving this issue on those two factors. I've added them to other factor that I consider important but secondary because it revolves around prices and discounts too, that factor is: quantities. Quantities dictate how much I charge to the customer, but it also has certain rulesets on how discounts are applied. Noticing those 3 factors I decided to work all my variables around them and let the solution flow organically.

The basic approach I've taken for the project was divide it in as much variables as possible, since the problem
was complex and had some overlapping concepts (discounts over other discounts). I've subdivided the problem to bits so small that I believe you can put (or change) parts of the code like prices, changing discount types and even discount definitions with as minimal effort as possible. The code is lengthy, no doubt about it. But it's highly reusable and changing a few lines can change complex situations in a matter of minutes without the need to modify huge chunks of code.