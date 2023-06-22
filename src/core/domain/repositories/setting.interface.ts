import { Setting } from '../entities/setting'

export interface SettingsRepositoryInterface {
  save(setting: Setting): Promise<Setting>
  update(id: number, metadata: object): Promise<string>
}
