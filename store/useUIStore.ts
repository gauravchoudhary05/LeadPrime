import { create } from 'zustand';

// ─── UI State ────────────────────────────────────────────────────────────────
interface UIState {
  // Mobile menu
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  // Floating chat widget
  isChatWidgetOpen: boolean;
  toggleChatWidget: () => void;
  closeChatWidget: () => void;

  // Active section (for navbar highlighting)
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Mobile menu
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Floating chat widget
  isChatWidgetOpen: false,
  toggleChatWidget: () =>
    set((state) => ({ isChatWidgetOpen: !state.isChatWidgetOpen })),
  closeChatWidget: () => set({ isChatWidgetOpen: false }),

  // Active section
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
}));
