import { WorkspaceContext } from '@teambit/generator';

export const launchJson = `{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Bit Debugger",
      "program": "\${workspaceFolder}/node_modules/@teambit/bit/dist/app.js",
      "args": "\${input:bitCommand}",
      "outFiles": [
        "\${workspaceFolder}/**/*.js",
        "dist/**/*.js"
      ],
      "console": "integratedTerminal",
      "sourceMaps": true,
      "internalConsoleOptions": "neverOpen",
      "cwd": "\${workspaceFolder}"
    }
  ],
  "inputs": [
    {
      "id": "bitCommand",
      "type": "promptString",
      "description": "Enter the command without the 'bit' prefix"
    }
  ]
}`;
