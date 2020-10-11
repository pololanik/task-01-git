# Task 1 - Git

_Created:_ **Patrik Majerčík**

#### Prerequisites

1. Download and install npm and Node.js [here.](https://www.npmjs.com/get-npm)
1. [WINDOWS] Download and install git and git bash [here.](https://git-scm.com/downloads)
1. [OPTIONAL] Add ssh key to [GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
1. [OPTIONAL] `$ git config --global user.email "uco@mail.muni.cz"`
1. [OPTIONAL] `$ git config --global user.name "FirstName LastName"`
1. [OPTIONAL] Set your favourite text editor for git

-   `git config --global core.editor "/Applications/Sublime\ Text.app/Contents/MacOS/Sublime\ Text"`

8. Clone your repository

#### Task 0.0

1. Extract provided zip archive into folder outside of this folder and go to the extracted folder
1. From now on work with extraced folder (don't use original repository with `zip` file)
1. Provided zip contains version of this repository with full git history saved in `.git`
1. Set your assigment remote as origin `git remote set-url origin <<url_to_your_assigment>>` (url_to_your_assigment is for example https://github.com/FI-PV247/task-01-git-john-doe)

#### Task 1.0

1. Checkout the branch `task_1.0_master`
1. In a project directory run from cmd line `npm install` and `npm start`
1. Hello world project should start in your browser
1. Installing and running our project creates junk file that we do not want push to repository (use `git status` to check)
1. Create new branch `task_1.0_submit` from `task_1.0_master`
1. Create a commit with [.gitignore](https://github.com/facebook/react/blob/master/.gitignore) 
1. Push it to your remote (use parameter `-u <<your_remote_name>>`)

#### Task 1.1

1. Checkout the branch `task_1.1_master`
1. Checkout the branch `task_1.1_feature`
1. Create new branch `task_1.1_feature_rebase`
1. You have two branches that have some common commit and you can visualize it like this [Image](https://imgur.com/7HiFpQz).
1. You want to rebase feature branch based on master. ([Image](https://imgur.com/Y4UZsSd))
1. Resolve all conflicts
1. Push it to the branch `task_1.1_feature_rebase` on your remote

#### Task 1.2

1. Checkout the branch `task_1.2_master`
1. Checkout the branch `task_1.2_feature`
1. Create new branch `task_1.2_feature_merge`
1. You have two branches that have some common commit and you can visualize it like this [Image](https://imgur.com/7HiFpQz).
1. You want to merge feature based on master. ([Image](https://imgur.com/0Xq5Wuf))
1. Resolve all conflicts
1. Push solution to the branch `task_1.2_feature_merge` on your remote

#### Task 1.3

1. Checkout the branch `task_1.3_bugfix`
1. Create new branch `task_1.3_bugfix_squished`
1. Imagine situation that you had made bunch of commits thats tries to fix some bug. First two commits does not fix anything. Your fix is succesfull with last commit.
1. Use git rebase interactive (`git rebase -i ...`) and squish three last commits to one.
1. Push solution to the branch `task_1.3_bugfix_squished` on your remote

#### Task 1.4

1. Checkout the branch `task_1.4_master` - this is your master branch of your product application.
1. Your developer team is creating one feature after another in the branch `task_1.4_features` (look at this branch using `git log`)
1. You promised your custumer that 2 specific features ("Feature 1","Feature 3") will be released today (find these commits based on commit messages).
1. Create the branch `task_1.4_release` from `task_1.4_master`
1. Add commits "Feature 1" and "Feature 3" to the branch `task_1.4_release` using `cherry-pick`
1. Tag last commit as "release 1.0"
1. Push your solution to the branch `task_1.4_release` on your remote

Solution visualization: [image](https://imgur.com/Qj2PHPP)

#### Task 1.5

1. Push branch `task_1.5_master` to your remote
1. Change your directory to the outside of a folder you have this repository cloned in.
1. Without using `git clone`, checkout the branch `task_1.5_master` (use `git init` and `git remote`)
1. Create some commit
1. Push your solution to `task_1.5_master` on your remote

#### Task 1.6

1. Return back to your cloned directory.
1. Checkout the branch `task_1.6_master`
1. Using `git reset` remove last commit
1. Push your solution to the branch `task_1.6_reset` on your remote

#### Task 1.7

1. Checkout the branch `task_1.7_master`
1. Using `git revert` and revert last commit
1. Push your solution to the branch `task_1.7_revert` on your remote
