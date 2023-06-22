type SettingProps = {
  id?: number
  user_id?: number
  metadata: object | string
  created_at?: string
  updated_at?: string
}

export class Setting {
  constructor(public props: SettingProps) {}

  public get id(): number | undefined {
    return this.props.id
  }

  public get user_id(): number | undefined {
    return this.props.user_id
  }

  public get metadata(): object | string {
    return this.props.metadata
  }

  public get created_at(): string | undefined {
    return this.props.created_at
  }

  public get updated_at(): string | undefined {
    return this.props.updated_at
  }

  public toJSON() {
    return {
      id: this.id,
      user_id: this.user_id,
      metadata: this.metadata,
      createdAt: this.created_at,
      updatedAt: this.updated_at,
    }
  }
}
