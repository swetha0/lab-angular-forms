![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Angular Forms



## Learning Goals

After this lesson, you will be able to:

- Create a static Angular application with Angular CLI.
- Build an Angular application with forms.
- Performing validation in angular forms.
- Validators in forms.

## Requirements

- Fork this repo.
- Clone this repo.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a pull request from your master branch to the original repository's master branch.

In the pull request name, add your Prograd id, name, and last name separated by a dash "-".

## Deliverables

You need to generate the starter code and fill it with the necessary code to satisfy the requirements described below.


## Starter Code

To generate the starter code, follow the steps given below

- To create a new application,
    - Open your ubuntu or cmd terminal and execute the following command
      - ```ng new app-name```
      - for example, ng new super-wars
    - To create a new component, execute the command 
      - ``` ng generate component component-name```
      - example, ng generate component contacts
      
## How to run

- To run the project go to your ubuntu terminal or VScode editor
    - open the ubuntu or cmd terminal or inside the vscode editor
    - run the command following command
    - ```ng serve --open or ng serve -o```

## Instructions
Once you clone your project, 
```cd lab-angular-prograd-contacts
   run the below command
   npm install --save-dev @angular-devkit/build-angular
   ```

## Progression #1: Forms

In this we are going to build a form. Imagine you need to create sign up and login form for your application. Did you ever thought of building it. Let us try to build one.

- Go to app.component.ts and try to complete the validation code for your form.
- To bind the form values along with your validation, try using the below code `ngClass` snippet in your html file inside the input tag.
``` [ngClass]="{ 'is-invalid': submitted && f.firstName.errors } ```
- Your form design in given in app.component.html, try to validate all the fields using `ngClass`.
- Validate all the fields given in the form.


Happy Coding ProGrad ❤️
