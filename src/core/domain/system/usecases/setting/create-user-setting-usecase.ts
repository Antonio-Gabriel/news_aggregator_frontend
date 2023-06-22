import { Setting } from '../../../entities/setting'
import { SettingService } from '../../../../infra/services/setting.service'

type SettingProps = {
  user_id: number
  metadata: object
}

export class CreateUserSettingsUsecase implements SystemContract {
  constructor(private service: SettingService) {}

  async execute({ user_id, metadata }: SettingProps) {
    const setting = new Setting({
      user_id,
      metadata,
    })

    const settingResponse = await this.service.save(setting)
    return settingResponse
  }
}
