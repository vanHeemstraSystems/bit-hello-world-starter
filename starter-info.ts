import type { Metadata } from '@teambit/community.entity.community-starter';

export const components = [
  'learnbit.hello-world/get-hello-world',
  'learnbit.hello-world/hello-world-app',
  'learnbit.hello-world/ui/hello-world',
  'teambit.react/react-env-extension',
] as const;

export type ComponentOptions = (typeof components)[number];

export const starterInfo: Metadata = {
  appName: 'hello-world-app',
  templateName: 'hello-world',
  description: 'a simple hello-world-react workspace',
  templateComponentId:
    'https://bit.cloud/teambit/community/starters/hello-world',
  componentsPageUrl: 'https://bit.cloud/teambit/community/starters/hello-world',
  components,
  defaultScope: 'org.scope-name',
};
