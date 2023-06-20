declare namespace App {
  declare namespace Module {
    export type ArticleProps = {
      id: number
      title: string
      description: string
      source: string
      author: string
      content: string
      url: string
      url_image: string
      published_at: string
      category: CategoryProps
    }

    export type CategoryProps = {
      id: number
      name: string
      createdAt: string
    }

    type FiltersProps = {
      title: string
      categorie: string
      source: string
      dateRange: string
    }

    type SettingsProps = {
      id: number
      metadata: string
    }

    type SettingMetadataProps = {
      categories?: string
      authors?: string
      sources?: string
    }

    type UserProps = {
      id?: number
      name: string
      email: string
      password: string
      created_at?: string
      updated_at?: string
    }

    type UserData = Omit<
      App.Module.UserProps,
      'id' | 'created_at' | 'updated_at'
    > & {
      password: string
    }
  }
}
