import { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import Colors from '@/constants/Colors';
import Logo from '@/assets/logo';
import PostCard from '@/components/PostCard';

// Sample data
const POSTS = [
  { id: '1', title: '7월 급식 메뉴 건의함', date: '2025.07.01', hasComments: true },
  { id: '2', title: '7월 급식 메뉴 건의함', date: '2025.07.01', hasComments: false },
  { id: '3', title: '7월 급식 메뉴 건의함', date: '2025.07.01', hasComments: false },
  { id: '4', title: '7월 급식 메뉴 건의함', date: '2025.07.01', hasComments: true },
  { id: '5', title: '7월 급식 메뉴 건의함', date: '2025.07.01', hasComments: false },
  { id: '6', title: '7월 급식 메뉴 건의함', date: '2025.07.01', hasComments: false },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Logo width={32} height={32} />
          <Text style={styles.logoText}>Omomeok</Text>
        </View>
        <Text style={styles.headerSubtitle}>에서 급식 메뉴를 선택해보세요!</Text>
      </View>
      
      <FlatList
        data={POSTS}
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
    backgroundColor: Colors.light.cardBackground,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  logoText: {
    fontSize: 18,
    fontFamily: 'NotoSansKR-Bold',
    marginLeft: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'NotoSansKR-Regular',
  },
  listContent: {
    paddingHorizontal: 16,
  },
});