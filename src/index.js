const path = require('path')
const fs = require('fs')

const core = require('@actions/core')
const exec = require('@actions/exec')

async function main() {
  const command = core.getInput('run-command')
  const workingDir = core.getInput('working-dir')
  const reportLocation = core.getInput('report');

  // Run Codeceptjs Tests
  let fullReturn = ''

  const options = {}
  options.listeners = {
    stdout: (data) => {
      fullReturn += data.toString()
    },
    stderr: (data) => {
      fullReturn += data.toString()
    }
  }
  options.cwd = workingDir
  const exitCode = await exec.exec(command, [], options)

  if (reportLocation && exitCode !== 0) {
    const 
  }
}

main().catch(err => core.setFailed(err.message))
