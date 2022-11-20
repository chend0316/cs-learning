import { IPlaybackVolumeModifyVal, PlaybackVolumeModifyVal } from './bundle'

import protobufjs from 'protobufjs'

async function test() {
  return import('./bundle.json').then(descriptor => {
    const root = protobufjs.Root.fromJSON(descriptor)
    new PlaybackVolumeModifyVal({
      setVolume: 18
    })
  })
}
