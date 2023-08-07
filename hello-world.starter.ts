import { WorkspaceContext, Starter } from '@teambit/generator';
import { workspaceConfig } from './files/workspace-config';
import { gitIgnore } from './files/git-ignore';
import { launchJson } from './files/launch-json';
import { starterInfo, ComponentOptions } from './starter-info';

type ForkItem = {
  id: ComponentOptions;
  targetName?: string;
  env?: string;
};

export const starter: Starter = {
  name: starterInfo.templateName,
  description: starterInfo.description,
  appName: starterInfo.appName,
  generateFiles: async (context: WorkspaceContext) => [
    {
      relativePath: 'workspace.jsonc',
      content: await workspaceConfig(context),
    },
    {
      relativePath: '.gitignore',
      content: gitIgnore(),
    },
    {
      relativePath: '.vscode/launch.json',
      content: launchJson, 
    },
  ],

  fork: (context) => {
    const scope = context.defaultScope || starterInfo.defaultScope;
    const envTargetName = 'react-env-extension';
    const env = `${scope}/${envTargetName}`;

    const forkItems: ForkItem[] = [
      {
        id: 'teambit.react/react-env-extension',
      },
      { id: 'learnbit.hello-world/get-hello-world' },
      { id: 'learnbit.hello-world/hello-world-app', env },
      {
        id: 'learnbit.hello-world/ui/hello-world',
        env,
      },
    ];
    return forkItems;
  },
};

export default starter;
