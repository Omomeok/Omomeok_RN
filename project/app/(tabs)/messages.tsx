import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import Colors from '@/constants/Colors';
import PostCard from '@/components/PostCard';

// Sample data
const MESSAGES = [
  { id: '1', title: '밥 맛이 주세요', date: '2025.07.01', hasComments: true },
  { id: '2', title: '메뉴 변경 요청합니다', date: '2025.07.01', hasComments: true },
  { id: '3', title: '급식 관련 문의드립니다', date: '2025.07.01', hasComments: false },
  { id: '4', title: '새로운 메뉴 제안', date: '2025.07.01', hasComments: true },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>메시지</Text>
      </View>
      
      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            id={item.id}
            title={item.title}
            date={item.date}
            hasComments={item.hasComments}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>아직 메시지가 없습니다.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  title: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Bold',
  },
  listContent: {
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    fontFamily: 'NotoSansKR-Regular',
  },
});