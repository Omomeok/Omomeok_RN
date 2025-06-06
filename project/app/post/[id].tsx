import { View, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Text } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ChevronLeft, Send } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import CommentCard from '@/components/CommentCard';

// Sample data
const POST_CONTENT = `급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.급식에 대한 평가 및 메뉴 작성 부탁드립니다.`;

const COMMENTS = [
  {
    id: '1',
    author: '밥 맛이 주세요',
    content: '제 치느 맛이 안좋습니다ㅠㅠㅠㅠㅠㅠㅠ제 치느 맛이 안좋습니다ㅠㅠㅠㅠㅠㅠㅠ제 치느 맛이 안좋습니다ㅠㅠㅠㅠㅠㅠㅠ',
    date: '2025.07.01',
    isNew: true,
  },
  {
    id: '2',
    author: '밥 많이 주세요',
    content: '댓글이 많이 남자랗요ㅠㅠㅠㅠㅠㅠㅠ',
    date: '2025.07.01',
    isNew: false,
  },
];

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>7월 급식 메뉴 건의함</Text>
          <View style={styles.headerRight} />
        </View>
        
        <ScrollView style={styles.content}>
          <View style={styles.postMeta}>
            <Text style={styles.postDate}>2025.07.01</Text>
          </View>
          
          <Text style={styles.postContent}>{POST_CONTENT}</Text>
          
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>전체보기</Text>
          </TouchableOpacity>
          
          <View style={styles.commentsHeader}>
            <Text style={styles.commentsTitle}>다른 게시물 보기</Text>
          </View>
          
          <View style={styles.commentsList}>
            {COMMENTS.map((comment) => (
              <CommentCard
                key={comment.id}
                author={comment.author}
                content={comment.content}
                date={comment.date}
                isNew={comment.isNew}
              />
            ))}
          </View>
        </ScrollView>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="댓글을 입력하세요..."
            placeholderTextColor="#999"
            multiline
          />
          <TouchableOpacity style={styles.sendButton}>
            <Send size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
  },
  keyboardAvoid: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
  },
  headerRight: {
    width: 32,
  },
  content: {
    flex: 1,
  },
  postMeta: {
    padding: 16,
    backgroundColor: 'white',
  },
  postDate: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'NotoSansKR-Regular',
  },
  postContent: {
    padding: 16,
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: 'white',
    fontFamily: 'NotoSansKR-Regular',
  },
  readMoreButton: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  readMoreText: {
    fontSize: 14,
    color: Colors.light.tint,
    fontFamily: 'NotoSansKR-Medium',
  },
  commentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  commentsTitle: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Bold',
  },
  commentsList: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    backgroundColor: '#F8F9FC',
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.tint,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});