import { Avatar } from '@/src/components/Avatar'
import { theme } from '@/src/theme'
import { Ionicons } from '@expo/vector-icons'
import { Tabs} from 'expo-router'

export default function TabLayout(){
    return(
        <Tabs screenOptions={
                {
                    headerShown: false,
                    tabBarShowLabel: false,

                    tabBarActiveTintColor: theme.colors.red_400,
                    tabBarInactiveTintColor: theme.colors.gray_200,

                    tabBarStyle:{
                        backgroundColor: theme.colors.gray_800,
                        borderColor: theme.colors.gray_800
                    }
                }
            }
        >
            <Tabs.Screen 
                name='home/index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name='home' size={25} color={color}/>
                    )
                }}
            />
            <Tabs.Screen 
                name='search/index'
                options={{
                    title: 'Search',
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name='search' size={25} color={color}/>
                    )
                }}
            />
            <Tabs.Screen 
                name='profile/index'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Avatar 
                            selected ={color=== theme.colors.red_400}
                            source={{uri: 'https://github.com/dominghuz.png'}}
                        />
                    )
                }}
            />
        </Tabs>
    )
}