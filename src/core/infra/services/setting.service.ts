import { AxiosInstance } from 'axios'

import { Setting } from '../../domain/entities/setting'
import { SettingsRepositoryInterface } from '../../domain/repositories/setting.interface'

export class SettingService implements SettingsRepositoryInterface {
  public constructor(private http: AxiosInstance) {}

  async save({ user_id, metadata: clientMetadata }: Setting): Promise<Setting> {
    return await this.http
      .post('/users/settings', {
        user_id,
        metadata: {
          // @ts-ignore
          ...clientMetadata,
        },
      })
      .then((response) => response.data)
  }

  async update(id: number, metadata: object): Promise<string> {
    return await this.http
      .put(`/users/settings/${id}`, {
        metadata,
      })
      .then((response) => response.data)
  }
}
