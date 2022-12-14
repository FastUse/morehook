// import fs from 'fs-extra'
// import {
//   updateContributors,
//   updateCountBadge,
//   updateFunctionREADME,
//   updateFunctionsMD,
//   updateImport,
//   updateIndexREADME,
//   updatePackageJSON,
//   updatePackageREADME
// } from './utils'
import { metadata, allCategories } from '../packages/metadata/metadata'
import { updatePackageJSON, updateImport, updateGuideCategories } from './utils'

async function run() {
  await Promise.all([
    updateImport(metadata),
    // updatePackageREADME(metadata),
    // updateIndexREADME(metadata),
    // updateFunctionsMD(metadata),
    // updateFunctionREADME(metadata),
    updatePackageJSON(metadata),
    updateGuideCategories(allCategories)
    // process.env.CI && updateCountBadge(metadata),
    // process.env.CI && updateContributors(),
  ])

  // await fs.copy('./CONTRIBUTING.md', './packages/contributing.md')
}

run()
