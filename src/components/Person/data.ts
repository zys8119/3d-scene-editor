import { User } from '@/api/v1/common'

export const hasGotten = ref<Set<string>>(new Set())
export const userData = ref<Record<string, User[]>>({})

export const updateData = async(role = 'default', callback?: () => void) => {
    const res = await window.api.v1.common.userList(role === 'default' ? undefined : role)
    userData.value[role] = res.data
    hasGotten.value.add(role)
    callback?.()
}

export const getData = (role = 'default', callback?: () => void) => {
    if (!hasGotten.value.has(role)) {
        updateData(role, callback)
    } else {
        callback?.()
    }
}

export const flattenSet = computed(() => {
    const finalObject: Record<string, Set<User>> = {}
    const get = (users: User[], finalSet: Set<User>) => {
        users.forEach(user => {
            finalSet.add(user)
            if (user.children && user.children.length > 0) {
                get(user.children, finalSet)
            }
        })
    }
    Object.entries(userData.value).forEach(([key, users]) => {
        const finalSet = new Set<User>()
        get(users, finalSet)
        finalObject[key] = finalSet
    })
    return finalObject
})