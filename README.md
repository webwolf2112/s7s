# How to make changes to the website

## Prereqs

    1. clone the repo
    2. run npm install 

## How to make changes.
Pull the latest changes
`git pull`

To make basic website changes that already exist modify the `website_content.json` file in the `public` folder
    The structure should match the page names (about, music etc. )

### uplading to S3
run the `npm run build` command to build the files that will override the existing files on the S3 bucket.
run the `aws s3 sync build s3://s7studios` command to sync up the new local files with the s3 bucket


After syncing make sure you push the changes to git or the will be overwritten. 
`git add .`
`git commit -m "say what you changed"`
`git push`

Boom you are done! 