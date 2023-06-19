import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isOnList } from '../../utils/is-on-list'
import { setFilterTags } from '../../app/feactures/filters-tag-slice'

type filtersTagsProps = {
  key: string
  value: string
}

function getNonEmptyValuesInFilters(
  filters: App.Module.FiltersProps,
): filtersTagsProps[] {
  return Object.entries(filters)
    .filter(([_, value]) => value !== '')
    .map(([key, value]) => ({ key, value }))
}

export function useFilterTags(filters: App.Module.FiltersProps) {
  let filtersTags: filtersTagsProps[] = []

  const dispatch = useDispatch()

  const nonEmptyValues = getNonEmptyValuesInFilters(filters)

  nonEmptyValues.map((filter) => {
    if (
      !isOnList(filtersTags, filter, (filter, tag) => filter.key == tag.key) &&
      filter.value != '1'
    ) {
      filtersTags.push(filter)
      return
    }
  })

  useEffect(() => {
    dispatch(setFilterTags(nonEmptyValues))
  }, [filters])
}
