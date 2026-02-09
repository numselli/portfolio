import { init } from '@immich/sdk'
import type { PublicRuntimeConfig } from '@nuxt/schema';

let initialized = false
let config: PublicRuntimeConfig;

export function getImmichClient() {
  if (!initialized) {
    const { public: publicConfig } = useRuntimeConfig()
    config = publicConfig
    init({
      baseUrl: publicConfig.immichDomain,
      apiKey: publicConfig.immichKey
    })

    initialized = true
  }

  return config
}