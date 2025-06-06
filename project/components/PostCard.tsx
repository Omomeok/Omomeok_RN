import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { MessageCircle } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface PostCardProps {
  id: string;
  title: string;
  date: string;
  hasComments?: boolean;
}

export default function PostCard({ id, title, date, hasComments = false }: PostCardProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => router.push(`/post/${id}`)}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      
      {hasComments && (
        <View style={styles.commentsIcon}>
          <MessageCircle size={20} color={Colors.light.tint} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 6,
    fontFamily: 'NotoSansKR-Medium',
  },
  date: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'NotoSansKR-Regular',
  },
  commentsIcon: {
    marginLeft: 10,
  },
});