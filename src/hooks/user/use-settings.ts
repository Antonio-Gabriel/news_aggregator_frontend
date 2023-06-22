import { Registry, container } from '../../core/container.config'
import { CreateUserSettingsUsecase } from '../../core/domain/system/usecases/setting/create-user-setting-usecase'

type SettingProps = {
  user_id: number
  metadata: object
}

export function useSettings() {
  async function create({ user_id, metadata }: SettingProps) {
    const settingUsecase = container.get<CreateUserSettingsUsecase>(
      Registry.CreateUserSettingsUsecase,
    )

    const settingData = await settingUsecase.execute({
      user_id,
      metadata,
    })

    if (settingData) {
      return {
        setting: settingData.toJSON(),
      }
    }
  }

  return { create }
}
